import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const DEFAULT_ANIMATION_SPEED: number = 8;

@Directive({
    selector: '[appAnimatedCounter]'
})

export class AnimatedCounterDirective implements OnInit, OnDestroy {

    @Input('appAnimatedCounter') value: number;
    @Input() delay: number = 0;
    @Input() speed: number = DEFAULT_ANIMATION_SPEED;

    staticText: string;

    private $destroyed = new Subject<void>();
    private startingValue: number = 0;

    constructor(
        private el: ElementRef<HTMLElement>, 
        private renderer: Renderer2
    ) {}

    public ngOnInit(): void {
        if(!!this.el.nativeElement.textContent) {
            this.staticText = this.el.nativeElement.textContent;
        }

        if(this.delay > 0){
            this.renderer.setProperty(this.el.nativeElement, 'textContent', this.startingValue);
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
                    this.renderer.setProperty(this.el.nativeElement, 'textContent', `${this.startingValue}${this.staticText ? this.staticText : ''}`);
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