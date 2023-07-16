<template>
    <form>
        <div class="col-4 container border rounded-4">
            <div class="row">
                <div class="col-12 ">
                    <label for=" username" class="form-label  d-flex justify-content-center"></label>
                    <input type="text" class="form-control" id="username" aria-describedby="usuarioHelp"
                        placeholder="Ingresa tu usuario">
                </div>
                <div class="col-12 mb-3 ">
                    <label for="password" class="form-label"></label>
                    <input type="password" class="form-control" id="password" placeholder="Ingresa tu clave">
                </div>
                <div class="nav">
                    <div class="col-12 mb-3">
                        <label class="input-group justify-content-center mb-2" for="exampletext1"><strong>¿Aún no estás
                                registrado? Registrate</strong> &nbsp;<a href="/create-registro"> Aqui</a></label>
                    </div>
                </div>
                <div class="col-12 mb-2">
                    <button type="submit" class="btn btn-primary input-group">Ingresar</button>
                </div>

            </div>
        </div>

    </form>
</template>

<script>

export default {
    name: 'LoginComponent',
    props: {


    },
    setup() {



    },
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        formSubmitHandler() {
            fetch("https://6065f8bfb8fbbd0017567d11.mockapi.io/contact-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.form),
            })
                .then((res) => res.json())
                .then(() => {
                    this.sent = true
                });
        },
    },
};



</script>
<style></style>