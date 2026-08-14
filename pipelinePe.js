export const Pe = {
    id: "Pe-finalize",
    run(core){
        return {
            phase: this.id,
            action: "Abschluss",
            input: core,
            timestamp: Date.now()
        };
    }
};
