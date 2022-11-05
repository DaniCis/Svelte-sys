import { toast } from '@zerodevx/svelte-toast'

export const success = m => toast.push(m, {
    theme: {
        '--toastBackground': '#4caf50' ,
        '--toastColor': 'white',
        '--toastBarBackground': '#2F855A',
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
    }
})

export const warning = m => toast.push(m, { 
    theme: {
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
    }
})

export const failure = m => toast.push(m, { 
    theme: { 
        '--toastWidth':'20rem',
        '--toastHeight':'4rem',
        '--toastBorderRadius':' 0.5rem',
        '--toastPadding':'0.75rem 1rem',
    }
})