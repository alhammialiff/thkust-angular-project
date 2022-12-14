import { trigger, state, style, animate, transition } from '@angular/animations';

export function visibility(){
    return trigger('visibility', [
        // state() are states defined at the end of each transition
        state('shown', style({
            transform: 'scale(1.0)',
            opacity: 1
        })),
        state('hidden', style({
            transform: 'scale(0.5)',
            opacity: 0
        })),
        // animate('duration delay easing')
        transition('* => *', animate('0.5s ease-in-out'))
    ]);
}

export function spinnerPreviewVisibility(){
    return trigger('spinnerPreviewVisibility', [
        state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => shown', animate('0.5s ease-in-out'))
    ]);
}

export function feedbackPreviewVisibility(){
    return trigger('feedbackPreviewVisibility', [
        state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => shown', animate('0.5s ease-in-out'))
    ]);
}

export function formVisibility(){
    return trigger('formVisibility', [
        state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
        })),
        transition('* => shown', animate('1s ease-in-out'))
    ]);
}

export function flyInOut() {
    return trigger('flyInOut', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter', [
            style({ 
                transform: 'translateX(-20%)', 
                opacity: 0 
            }),
            animate('500ms ease-in')
        ]),
        transition(':leave', [
            animate('500ms ease-out',
                style({ 
                    transform: 'translateX(100%)', 
                    opacity: 0 
                }))
        ])
    ]);
}

export function expand() {
    return trigger('expand', [
        state('*', style({
            opacity: 1,
            transform: 'translateX(0)'
        })),
        transition(':enter',[
            style({ 
                transform: 'translateY(-50%)', 
                opacity: 0 }),
            animate('200ms ease-in', 
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                }))
        ])
    ])
}