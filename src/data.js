exports.taxBands = [
    {
        description: "Tax Band 0",
        range: [0, 145000],
        difference: 145000,
        rate: 0
    },
    {
        description: "Tax Band 1",
        range: [145001, 250000],
        difference: 105000,
        rate: 0.02
    },
    {
        description: "Tax Band 2",
        range: [250001, 325000],
        difference: 75000,
        rate: 0.05
    },
    {
        description: "Tax Band 3",
        range: [325001, 750000],
        difference: 425000,
        rate: 0.1
    },
    {
        description: "Tax Band 4",
        range: [750000, Infinity],
        difference: null,
        rate: 0.12
    }
]