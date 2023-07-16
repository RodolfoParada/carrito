<template>
    <form>
        <div class="col-4 container border rounded-4">
            <div class="row">
                <div class="col-12 mt-3 mb-3 input-group">
                    <label for="nombre" class="form-label  d-flex justify-content-center"></label>
                    <input type="text" class="form-control" id="nombre" aria-describedby="nombreHelp"
                        placeholder="Ingresa tu nombre(s)">
                    <span class="input-group-text" id="basic-addon1">*</span>
                </div>
                <div class="col-12 mb-3 input-group">
                    <label for="apellido" class="form-label  d-flex justify-content-center"></label>
                    <input type="text" class="form-control" id="apellido" aria-describedby="apellidoHelp"
                        placeholder="Ingresa tu apellido(s)">
                    <span class="input-group-text" id="basic-addon1">*</span>
                </div>
                <div class="col-12 mb-3 input-group">
                    <label for="exampleInputEmail1" class="form-label  d-flex justify-content-center"></label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="email@email.com">
                    <span class="input-group-text" id="basic-addon1">*</span>
                </div>
                <div class="col-12 mb-3 input-group">
                    <label for="usuario" class="form-label  d-flex justify-content-center"></label>
                    <input type="text" class="form-control" id="usuario" aria-describedby="usuarioHelp"
                        placeholder="Ingresa tu usuario">
                    <span class="input-group-text" id="basic-addon1">*</span>
                </div>
                <div class="col-12 mb-3 input-group">
                    <label for="exampleInputPassword1" class="form-label"></label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu clave">
                    <span class="input-group-text" id="basic-addon1">*</span>
                </div>
                <div class="col-12 mb-3 ">
                    <label class="" for="exampleText2"><strong>* estos campos son obligatorios</strong></label>
                </div>
                <div class="col-12 mb-2 nav-item">
                    <button type="submit" class="btn btn-dark input-group">Registrate</button>
                </div>
                <div class="nav">
                    <div class="col-12 mb-3">
                        <label class="text input-group justify-content-center"><strong>¿Ya tienes una cuenta?
                                Ingresa</strong>&nbsp;<a href="/create-login">Aqui</a></label>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>

export default {
    name: 'RegistroComponente',
    components: {

    },
    data() {
        return {
            nombre: "",
            apellido: "",
            email: "",
            username: "",
            password: ""
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
}

</script>