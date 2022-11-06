import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
    theme: {
        '--toastBackground': '#4caf50' ,
        '--toastColor': 'white',
        '--toastBarBackground': 'hsla(0,0%,100%,.7)',
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
    }
})

export const info = m => toast.push(m, { 
    theme: {
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
        '--toastBackground': '#2196f3' ,
        '--toastColor': 'white',
        '--toastBarBackground': 'hsla(0,0%,100%,.7)',
    }
})

export const failure = m => toast.push(m, { 
    theme: { 
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
        '--toastBackground': '#ff5252;' ,
        '--toastColor': 'white',
        '--toastBarBackground': 'hsla(0,0%,100%,.7)',
    }
})
export const warning = m => toast.push(m, { 
    theme: { 
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
        '--toastBackground': '#ffc107' ,
        '--toastColor': 'white',
        '--toastBarBackground': 'hsla(0,0%,100%,.7)',
    }
})