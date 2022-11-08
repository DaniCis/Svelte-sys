
<nav class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 border-bottom">
    <div
      class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
      <a
        class="text-black text-sm uppercase hidden lg:inline-block font-semibold"
        href="/dashboard" on:click={(e) => e.preventDefault()}>
        Dashboard
      </a>
      <form class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
        <div class="relative flex w-full flex-wrap items-stretch">
          <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" stroke-width="1" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Buscar"
            class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10 rounded-lg"
          />
        </div>
      </form>
    </div>
</nav>