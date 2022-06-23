<script lang="ts">
    let firstname = "";
    let lastname = "";

    let textViewValue = "Tiago Rodrigues"

    function insert(textViewValue) {
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
        <stackLayout>
            <textView editable="{false}" bind:text="{textViewValue}" />
        </stackLayout>
    </stackLayout>
</page>



<style>

</style>