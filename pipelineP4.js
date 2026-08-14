export const P4 = {
    id: "P4-start",
    run(core){
        return {
            phase: this.id,
            action: "Initialisierung",
            input: core,
            timestamp: Date.now()
        };
    }
};
