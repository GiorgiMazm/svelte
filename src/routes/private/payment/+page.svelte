<script lang="ts">
	async function handlePayment(paymentId: string) {
		const data = await fetch('/api/pay/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ paymentId })
		});
		const obj = await data.json();
		window.location = obj.url;
	}
</script>

<div>
	<h2>Enter :</h2>
	<div id="card-element"></div>
	<button on:click={() => handlePayment('price_1Q10IIBCKo7pYt9RgSVwr1Ce')}>Pay 25</button>
	<br />
	<button on:click={() => handlePayment('price_1Q10ajBCKo7pYt9RUjKkQ5OH')}>Pay 40</button>
	<br />
	<button on:click={() => handlePayment('price_1Q1QGjBCKo7pYt9RRrjpIETu')}>Pay 50</button>
</div>
