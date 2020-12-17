class Audio{
    /**
     * Gère la partie audio du projet
     * @see https://createjs.com/getting-started/soundjs
     */
    constructor(){
    }
    /**
     * Joue une note aléatoirepa
     */
    playNote(){
        //let notes=["do","re","mi","fa","sol","la","si"];
        let notes=[
            "pong1"
            ,"pong2"
            ,"pong3"
            ,"pong4"
        ];
        let note =notes[Math.floor(Math.random() * notes.length)];
        createjs.Sound.play(note);

    }
    /**
     * Perdu
     */
    fausseNote(){
    }
}