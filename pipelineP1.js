export const P1 = {
    id: "P1-melt",
    run(core){
        return {
            phase: this.id,
            action: "Transformation",
            input: core,
            timestamp: Date.now()
        };
    }
};
