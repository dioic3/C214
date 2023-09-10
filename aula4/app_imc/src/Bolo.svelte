<script>
	import InformaesBolo from "./InformaçõesBolo.svelte";
	let nome = "";
    let tamanhoDoBolo = 0;
    let formatoDoBolo = "";

	function retornar(){
		console.log("Mensagem enviada!");
	}
</script>

<main>
	<label>
        Nome no Bolo: <input type="String" bind:value={nome} on:input={nome}>
    </label>
	<label>
        Tamanho do Bolo: <input type="number" bind:value={tamanhoDoBolo} on:input={tamanhoDoBolo}>
    </label>
	<label>
        Formato do Bolo: <input type="String" bind:value={formatoDoBolo} on:input={formatoDoBolo}>
    </label>
	<InformaesBolo mensagem = {retornar}/>
</main>
