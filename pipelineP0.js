export const P0 = {
    id: "P0-wake",
    run(core){
        return {
            phase: this.id,
            action: "Aktivierung",
            input: core,
            timestamp: Date.now()
        };
    }
};
