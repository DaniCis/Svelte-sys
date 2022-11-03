<script>
  let user = ''
  let password = ''
  const login =() => {

    console.log('Hola '+ user.trim())
    console.log(password.trim())
    user = ''
    password = ''
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
                  <h4 class="text-xl font-semibold mt-1 mb-8 pb-1">Bienvenido</h4>
                </div>
                <form on:submit|preventDefault = {login}>
                  <p class="mb-4">Ingrese sus credenciales de acceso</p>
                  <div class="mb-4">
                    <div class="form-control">
                      <label for='inputUser' class="label">
                        <span class="label-text">Usuario</span>
                      </label>
                      <input id='inputUser' type="text" placeholder="Usuario" class="input input-bordered w-full" bind:value={user} />
                    </div>  
                  </div>
                  <div class="mb-4">
                    <div class="form-control">
                      <label for='inputPassword' class="label">
                        <span class="label-text">Contraseña</span>
                      </label>
                      <div class="input-group">
                        <input id='inputPassword' type="password" placeholder="Contraseña" class="input input-bordered w-full" bind:value={password}/>
                        <button class="btn btn-square">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="text-center pt-1 mb-12 pb-1">
                    <button
                      class="btn glass w-full mb-3 mt-6" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light"
                      style="background: linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593);"
                    >
                    Iniciar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);"
            >
              <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                <p class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>