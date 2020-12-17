class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            ,"Cringe..."
            ,"J'ai besoin d'espace"
            ,"Fait froid"
            ,"Un ptit kebab apres le match ?"
            ,"Trop bien le dernier episode de Dora"
            ,"Club Pinguin c'est trop bien !!"
            ,"Hello_World"
            ,"Affronte mon regard"
            ,"Je passe en mode FURAX !!"
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}