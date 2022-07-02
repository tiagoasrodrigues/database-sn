<script lang="ts">
    let firstname = "";
    let lastname = "";

    function insert() {
        
    }

    function select() {

    }

</script>

<page>
    <actionBar title="MyApp" />
    <stackLayout>
        <textField id="firstname" hint="Nome" text="{firstname}" />
        <textField id="lastname" hint="Sobrenome" text="{lastname}" />
        <stackLayout orientation="horizontal">
            <button text="Inserir" tap="{insert}" />
            <button text="Selecionar" tap="{select}" />
        </stackLayout>
    </stackLayout>
</page>

<style>

</style>