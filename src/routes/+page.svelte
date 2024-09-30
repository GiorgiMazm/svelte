<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import { slide } from 'svelte/transition';

	let faqs = [
		{
			question: 'What makes your solution different from others?',
			answer:
				'Our solution stands out with its cutting-edge AI technology, user-friendly interface, and unparalleled customer support. We offer customizable features that adapt to your specific business needs, ensuring maximum efficiency and ROI.',
			isOpen: false
		},
		{
			question: 'How long does it take to set up and integrate with my existing systems?',
			answer:
				'The setup process typically takes 1-3 business days, depending on the complexity of your existing systems. Our expert team will guide you through every step, ensuring a smooth integration with minimal disruption to your operations.',
			isOpen: false
		},
		{
			question: 'Is my data secure with your platform?',
			answer:
				"Absolutely. We employ bank-grade encryption and adhere to the highest industry standards for data security. Our platform undergoes regular security audits, and we're compliant with GDPR, CCPA, and other relevant data protection regulations.",
			isOpen: false
		},
		{
			question: 'Do you offer a free trial?',
			answer:
				'Yes, we offer a 14-day free trial for all our plans. This allows you to explore our features and see how our solution can benefit your business before making a commitment.',
			isOpen: false
		},
		{
			question: 'What kind of support do you provide?',
			answer:
				'We offer 24/7 customer support via chat, email, and phone. Our Professional and Enterprise plans include priority support and a dedicated account manager to ensure you get the most out of our platform.',
			isOpen: false
		},
		{
			question: 'Can I upgrade or downgrade my plan at any time?',
			answer:
				'Yes, you can easily upgrade or downgrade your plan at any time through your account dashboard. Changes will be reflected in your next billing cycle, and our team is always available to assist with any questions about plan changes.',
			isOpen: false
		}
	];

	function toggleFaq(index: number) {
		faqs[index].isOpen = !faqs[index].isOpen;
		faqs = faqs; // Trigger reactivity
	}
</script>

<main class="container mx-auto px-4">
	<!-- Hero Section -->
	<section class="bg-white py-20">
		<div class="container mx-auto text-center">
			<h1 class="mb-6 text-5xl font-bold">Welcome to Our Amazing Product</h1>
			<p class="mb-8 text-lg text-gray-600">
				Your gateway to innovative solutions and modern design.
			</p>
			<div class="flex justify-center space-x-4">
				<Button color="blue" size="xl" class="transform transition hover:scale-105"
					>Get Started</Button
				>
				<Button class="transform bg-gray-700 text-white transition hover:scale-105" size="lg"
					>Learn More</Button
				>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<hr class="my-10 border-gray-300" />

	<!-- Features Section -->
	<section id="features" class="py-20">
		<h2 class="mb-12 text-center text-3xl font-bold">Why Choose Us?</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div
				class="transform rounded-lg bg-white p-6 text-center shadow-lg transition duration-500 hover:scale-105"
			>
				<i class="fas fa-rocket mb-4 text-4xl text-blue-500"></i>
				<h3 class="mb-2 text-xl font-semibold">Lightning Fast Performance</h3>
				<p>Experience unparalleled speed and efficiency in all your operations.</p>
			</div>
			<div
				class="transform rounded-lg bg-white p-6 text-center shadow-lg transition duration-500 hover:scale-105"
			>
				<i class="fas fa-shield-alt mb-4 text-4xl text-blue-500"></i>
				<h3 class="mb-2 text-xl font-semibold">Bank-Grade Security</h3>
				<p>Rest easy knowing your data is protected by state-of-the-art security measures.</p>
			</div>
			<div
				class="transform rounded-lg bg-white p-6 text-center shadow-lg transition duration-500 hover:scale-105"
			>
				<i class="fas fa-headset mb-4 text-4xl text-blue-500"></i>
				<h3 class="mb-2 text-xl font-semibold">24/7 Expert Support</h3>
				<p>Our dedicated team is always ready to assist you, anytime, anywhere.</p>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<hr class="my-10 border-gray-300" />

	<!-- About Section -->
	<section class="py-20">
		<div class="flex flex-col items-center md:flex-row">
			<div class="mb-8 md:mb-0 md:w-1/2">
				<img
					src="https://heliontechnologies.com/wp-content/uploads/2024/04/AI.jpeg"
					alt="About Us"
					class="transform rounded-lg shadow-md transition hover:scale-105"
				/>
			</div>
			<div class="md:w-1/2 md:pl-12">
				<h2 class="mb-6 text-3xl font-bold">About Us</h2>
				<p class="mb-4 text-lg text-gray-600">
					We are a team of passionate individuals dedicated to providing innovative solutions for
					businesses of all sizes.
				</p>
				<p class="mb-4 text-lg text-gray-600">
					With years of experience in the industry, we strive to deliver exceptional results and
					unmatched customer satisfaction.
				</p>
				<Button color="blue" class="transform transition hover:scale-105">Learn More</Button>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<hr class="my-10 border-gray-300" />

	<!-- Testimonial Section -->
	<section class="bg-gray-100 py-20">
		<h2 class="mb-12 text-center text-4xl font-bold text-gray-800">What Our Clients Say</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
				<p class="mb-4 text-gray-600">
					"Your Company has transformed our business processes. We couldn't be happier with the
					results!"
				</p>
				<p class="font-semibold">- John Doe, CEO of Tech Corp</p>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
				<p class="mb-4 text-gray-600">
					"The level of support and expertise provided by Your Company is unmatched. Highly
					recommended!"
				</p>
				<p class="font-semibold">- Jane Smith, CTO of Innovation Inc</p>
			</div>
			<div class="rounded-lg bg-white p-6 shadow-md transition-all hover:scale-105 hover:shadow-lg">
				<p class="mb-4 text-gray-600">
					"We've seen a significant increase in productivity since implementing Your Company's
					solutions."
				</p>
				<p class="font-semibold">- Mike Johnson, Operations Manager at Global Ltd</p>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<hr class="my-10 border-gray-300" />

	<!-- CTA Section -->
	<section class="bg-blue-600 py-20 text-center text-white">
		<h2 class="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
		<p class="mb-8 text-lg">Sign up today and get access to all features for free!</p>
		<Button size="lg" class="transform bg-white text-blue-600 transition hover:scale-105"
			>Sign Up Now</Button
		>
	</section>

	<!-- Divider -->
	<hr class="my-10 border-gray-300" />

	<!-- Pricing Section -->
	<section class="py-20">
		<h2 class="mb-12 text-center text-4xl font-bold text-gray-800">Pricing Plans</h2>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="rounded-lg border p-8 text-center shadow-md transition-all hover:shadow-lg">
				<h3 class="mb-4 text-2xl font-bold">Basic</h3>
				<p class="mb-6 text-4xl font-bold text-gray-800">
					$29<span class="text-lg font-normal">/month</span>
				</p>
				<ul class="mb-8 text-left text-gray-600">
					<li class="mb-2">✓ Feature 1</li>
					<li class="mb-2">✓ Feature 2</li>
					<li class="mb-2">✓ Feature 3</li>
				</ul>
				<Button color="blue" class="transform transition hover:scale-105">Choose Plan</Button>
			</div>
			<div
				class="rounded-lg border bg-blue-50 p-8 text-center shadow-md transition-all hover:shadow-lg"
			>
				<h3 class="mb-4 text-2xl font-bold">Pro</h3>
				<p class="mb-6 text-4xl font-bold text-gray-800">
					$79<span class="text-lg font-normal">/month</span>
				</p>
				<ul class="mb-8 text-left text-gray-600">
					<li class="mb-2">✓ All Basic Features</li>
					<li class="mb-2">✓ Feature 4</li>
					<li class="mb-2">✓ Feature 5</li>
					<li class="mb-2">✓ Feature 6</li>
				</ul>
				<Button color="blue" class="transform transition hover:scale-105">Choose Plan</Button>
			</div>
			<div class="rounded-lg border p-8 text-center shadow-md transition-all hover:shadow-lg">
				<h3 class="mb-4 text-2xl font-bold">Enterprise</h3>
				<p class="mb-6 text-4xl font-bold text-gray-800">
					$199<span class="text-lg font-normal">/month</span>
				</p>
				<ul class="mb-8 text-left text-gray-600">
					<li class="mb-2">✓ All Pro Features</li>
					<li class="mb-2">✓ Feature 7</li>
					<li class="mb-2">✓ Feature 8</li>
				</ul>
				<Button color="blue" class="transform transition hover:scale-105">Choose Plan</Button>
			</div>
		</div>
	</section>

	<!-- Divider -->
	<hr class="my-10 border-gray-300" />
	<section id="faq" class="bg-gray-100 py-20">
		<div class="container mx-auto px-4">
			<h2 class="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
			<div class="mx-auto max-w-3xl">
				<div class="space-y-6">
					{#each faqs as faq, index}
						<div class="overflow-hidden rounded-lg bg-white shadow-md">
							<button
								class="flex w-full items-center justify-between px-6 py-4 text-left font-semibold focus:outline-none"
								on:click={() => toggleFaq(index)}
							>
								{faq.question}
								<svg
									class={`h-5 w-5 transition-transform duration-300 ${
										faq.isOpen ? 'rotate-180 transform' : ''
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									></path>
								</svg>
							</button>
							{#if faq.isOpen}
								<div class="bg-gray-50 px-6 py-4" transition:slide>
									<p>{faq.answer}</p>
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</section>
</main>
<footer class="bg-gray-800 py-8 text-white">
	<div class="container mx-auto px-4 text-center">
		<p>&copy; 2024 Your Company. All rights reserved.</p>
	</div>
</footer>
