<template>
    <div class="py-16">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">Hospital Privilege Care</h2>
            <p class="text-xl text-gray-600 text-center">Registrar usuarios</p>
    <div class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
        <div class="w-full p-8 lg:w-1/2">
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Primer Apellido</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Segundo Apellido</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">CURP</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div class="mt-4">
                <label for="genero" class="block text-gray-700 text-sm font-bold mb-2">Genero</label>
                <select id="genero" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none">
                        <option selected>Selecciona un genero</option>
                        <option value="H">Hombre</option>
                        <option value="M">Mujer</option>
                        <option value="O">Otro</option>
                </select>
            </div>
            <div class="mt-4">
                <label for="sangre" class="block text-gray-700 text-sm font-bold mb-2">Sangre</label>
                <select id="sangre" class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none">
                        <option selected>Selecciona un tipo de sangre</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                </select>
            </div>
        </div>
        <div class="w-full p-8 lg:w-1/2">
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Fecha denacimiento</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="date" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Telefono</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="phone" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Correo Electrónic</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">usuario</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div class="mt-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">Repetir Contraseña</label>
                <input class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div class="mt-4">
                <button class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Registrar</button>
            </div>
            <div class="mt-4">
                <RouterLink to="/">
                <button class="bg-red-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-red-600">Cancelar</button>
                </RouterLink>
            </div>
        </div>
    </div>
</div>
</template>