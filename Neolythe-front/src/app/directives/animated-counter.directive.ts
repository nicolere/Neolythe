import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DEFAULT_ANIMATION_SPEED = 8;

@Directive({
    selector: '[appAnimatedCounter]'
})

export class AnimatedCounterDirective implements OnInit, OnDestroy {

    @Input('appAnimatedCounter') value: number;
    @Input() delay = 0;
    @Input() speed: number = DEFAULT_ANIMATION_SPEED;

    staticText: string;

    private $destroyed = new Subject<void>();
    private startingValue = 0;
    private _el: ElementRef<HTMLElement>;
    private _renderer: Renderer2;

    constructor(
        private el: ElementRef<HTMLElement>, 
        private renderer: Renderer2
    ) {
        this._el = el;
        this._renderer = renderer;
    }

    public ngOnInit(): void {
        if(!this._el.nativeElement.textContent) {
            this.staticText = this._el.nativeElement.textContent;
        }

        if(this.delay > 0){
            this._renderer.setProperty(this._el.nativeElement, 'textContent', this.startingValue);
        }

        timer(this.delay || 0)
            .pipe(takeUntil(this.$destroyed))
            .subscribe({
                complete: () => this._animate()
            })
    }

    public ngOnDestroy(): void {
        this.$destroyed.next();
        this.$destroyed.complete();
    }

    private _animate(): void {
        if(this.value && this._safeValidation(this.value)){
            const start = () => {
                if(this.startingValue < this.value){
                    this.startingValue++
                    this._renderer.setProperty(this._el.nativeElement, 'textContent', 
                    `${this.startingValue}${this.staticText ? this.staticText : ''}`);
                    setTimeout(start, this.speed);
                }
            };
            start();
        }
    }

    private _safeValidation(value: number): boolean {
        return typeof value === 'number';
    }
}