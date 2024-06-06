<template>
    <div class="py-16">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">Hospital Privilege Care</h2>
        <p class="text-xl text-gray-600 text-center">Registrar usuarios</p>
        <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
            <div class="w-full p-8 lg:w-1/2">
                <Personas/>
            </div>
            <div class="w-full p-8 lg:w-1/2">
                <Usuario/>
                <RouterLink to="/">
                    <button class="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600">Cancelar</button>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script>
import Personas from './Personas.vue'
import Usuario from './Usuario.vue'
export default{
    components: {
        Personas,
        Usuario
    }
}
</script>