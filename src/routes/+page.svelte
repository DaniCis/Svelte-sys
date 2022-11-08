<script>

  import * as yup from 'yup'
  import api from "../services/api"
  import { failure } from '../utils/toast'
  import { goto } from '$app/navigation'
  import { Form, Message, isInvalid } from 'svelte-yup'


  let fields = {user: "", password: ""}
  let submitted = false
  let show = true
  let isValid
  let schema = yup.object().shape({
    user: yup.string().required('Este campo es requerido').label("Usuario"),
    password: yup.string().required('Este campo es requerido').label("Contraseña"),
  })

  $: invalid = (name)=>{
    if(submitted){
      return isInvalid(schema, name, fields);
    }
    return false;
  }

  const login = async () => {
    submitted = true
    isValid = schema.isValidSync(fields)
    if(isValid){
      const formData = new FormData()
      formData.append('username', fields.user.trim())
      formData.append('password', fields.password.trim())
      
      try{
      const response = await api.get('https://pokeapi.co/api/v2/')      
        if(response != null && response != undefined){
          localStorage.setItem('token_auth', response.data)
          console.log(response)
          goto('/dashboard')
        }
      }catch (e){
        failure("e.response.data.detail" + '. Vuelva a ingresar')
      }
    }
  }

  const password_show_hide = () =>{
    show = !show
    let input = document.getElementById("inputPassword");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
</script>

<section class="h-full gradient-form bg-gray-200 md:h-screen">
  <div class="container py-12 px-6 h-full">
    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                  <img
                    class="mx-auto w-48"
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    alt="logo"
                  />
                  <h4 class="text-xl font-semibold mt-1 mb-8 pb-1 text-gradient">Bienvenido</h4>
                </div>
                <Form {schema} {fields} submitHandler = {login} {submitted}>  
                  <p class="mb-4">Ingrese sus credenciales de acceso</p>
                  <div class="mb-4">
                    <div class="form-control">
                      <label for='inputUser' class="label">
                        <span class="label-text">Usuario</span>
                      </label>
                      <input id='inputUser' type="text" placeholder="Usuario" class:invalid={invalid("user")} class="input input-bordered w-full" bind:value={fields.user} />
                      <Message name="user" />
                    </div>  
                  </div>
                  <div class="mb-4">
                    <div class="form-control">
                      <label for='inputPassword' class="label">
                        <span class="label-text">Contraseña</span>
                      </label>
                      <div class="input-group">
                        <input id='inputPassword' type="password" placeholder="Contraseña" class:invalid={invalid("password")} class="input input-bordered w-full" bind:value={fields.password}/>
                        <button class="btn btn-square" on:click={password_show_hide}>
                          {#if !show}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          {:else}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                          {/if}                      
                        </button>
                      </div>
                      <Message name="password" />
                    </div>
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="btn glass w-full mb-3 mt-6" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light"
                      style="background: linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593);">
                    Iniciar
                    </button>
                  </div>
                </Form>
              </div>
            </div>
            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .invalid {
    border-color: red !important;
  }
</style>