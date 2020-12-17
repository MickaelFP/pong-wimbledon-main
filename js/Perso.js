class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "t'es moche"
            ,"On s'emmerde un peu"
            ,"je vois rien, qu'est-ce qui se passe?"
            ,"..."
            ,"encore plus de sang. PLUS!"
            ,"vas-y tranche le!"
            ,"jsuis trop beau"
            ,"j'ai faim, ammenez-moi un os à ronger!"
            ,"vive moi!"
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