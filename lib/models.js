export function NovusBase () {
    this.name = "novus-base";
    this.fields = {
        username: { type: "string" },
        email: { type: "string" },
        account_type: { type: "choice", values: [ "individual", "institution", "admin" ] }
    }
}