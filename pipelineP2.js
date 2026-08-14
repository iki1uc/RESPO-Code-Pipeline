export const P2 = {
    id: "P2-merge",
    run(core){
        return {
            phase: this.id,
            action: "Zusammenführung",
            input: core,
            timestamp: Date.now()
        };
    }
};
