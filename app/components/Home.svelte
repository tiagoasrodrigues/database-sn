<script lang="ts">
    let firstname = "";
    let lastname = "";

    function insert() {
        // insert
    }

    function select() {
        // select
    }

</script>

<page>
    <stackLayout>
        <textField id="firstname" hint="Nome" text="{firstname}" />
        <textField id="lastname" hint="Sobrenome" text="{lastname}" />
        <stackLayout orientation="horizontal">
            <button text="Insert" tap="{insert}" />
            <button text="Select" tap="{select}" />
        </stackLayout>
    </stackLayout>
</page>

<style>

</style>