<script>
    import "../app.css"
    import { SvelteToast } from '@zerodevx/svelte-toast'

    const options = {
      pausable:true
  }

</script>
  

<SvelteToast {options} />
<slot />
