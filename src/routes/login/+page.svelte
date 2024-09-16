<div class="flex h-screen items-center justify-center">
	<div class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
		<h2 class="mb-6 text-2xl font-bold">Login</h2>
		<form>
			<div class="mb-4">
				<label for="email" class="mb-2 block font-bold text-gray-700"> Email </label>
				<input
					type="email"
					id="email"
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					placeholder="Enter your email"
				/>
			</div>
			<div class="mb-6">
				<label for="password" class="mb-2 block font-bold text-gray-700"> Password </label>
				<input
					type="password"
					id="password"
					class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
					placeholder="Enter your password"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					type="submit"
					class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
				>
					Sign In
				</button>
			</div>
		</form>
	</div>
</div>
