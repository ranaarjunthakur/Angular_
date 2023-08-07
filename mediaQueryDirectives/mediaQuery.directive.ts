import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject, takeUntil } from 'rxjs';
import { tap, throttleTime } from 'rxjs/operators';

@Directive({
    selector: '[mediaQuery]'
})
export class MediaQuery implements OnInit, OnDestroy {
    @Input() mediaQuery: string;

    private mediaQueryList: MediaQueryList;
    private isCreated: boolean;

    private readonly destroy$: Subject<void> = new Subject<void>();

    constructor(
        private readonly viewContainerRef: ViewContainerRef,
        private readonly templateRef: TemplateRef<unknown>
    ) {
    }

    ngOnInit() {
        if (!this.mediaQuery) {
            return;
        }

        this.mediaQueryList = matchMedia(this.mediaQuery);

        fromEvent(this.mediaQueryList, 'change')
        .pipe(
            takeUntil(this.destroy$),
            throttleTime(400),
            tap<MediaQueryListEvent>(({matches}) => this.update(matches))
        )
        .subscribe();

        this.update(this.mediaQueryList.matches);
    }

    update(matches: boolean) {
        if (this.isCreated) {
            this.viewContainerRef.clear();
        }

        if (!matches) {
            return;
        }

        const ref = this.viewContainerRef.createEmbeddedView(this.templateRef);
        ref.markForCheck();
        this.isCreated = true;
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}









/////////////////////////////////////////////////////////////////////////////////

export const MatchMediaQueries = {
    tabletOnly: `(min-width: ${EBreakPoints.tablet}px) and (max-width: ${EBreakPoints.desktop - 1}px)`,
    desktopOnly: `(min-width: ${EBreakPoints.desktop}px) and (max-width: ${EBreakPoints.large - 1}px)`,
    largeOnly: `(min-width: ${EBreakPoints.large}px)`,
    fromMobile: `(min-width: ${EBreakPoints.mobile}px)`,
    fromTablet: `(min-width: ${EBreakPoints.tablet}px)`,
    fromDesktop: `(min-width: ${EBreakPoints.desktop}px)`,
    fromLarge: `(min-width: ${EBreakPoints.large}px)`,
    untilMobile: `(max-width: ${EBreakPoints.mobile - 1}px)`,
    untilTablet: `(max-width: ${EBreakPoints.tablet - 1}px)`,
    untilDesktop: `(max-width: ${EBreakPoints.desktop - 1}px)`,
    untilLarge: `(max-width: ${EBreakPoints.large - 1}px)`
};


//////////////////////////////////////////////////////////////////////////////////////

export enum EBreakPoints {
    mobile = 380,
    tablet = 768,
    desktop = 922,
    large = 1200
}


////////////////////////////////////////////////////////////////////////

<div *mediaQuery="mediaQueries.untilMobile">Mobile</div>
<div *mediaQuery="mediaQueries.fromMobile">From mobile</div>
<div *mediaQuery="mediaQueries.fromTablet">From tablet</div>
<div *mediaQuery="mediaQueries.fromDesktop">From desktop</div>
<div *mediaQuery="mediaQueries.fromLarge">From large screen</div>
