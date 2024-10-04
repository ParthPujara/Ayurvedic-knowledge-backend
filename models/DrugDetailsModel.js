import mongoose, { Schema } from "mongoose";

const drugDetailsSchemda = Schema({
    drug_name: {
        type: String,
    },
    Description:{
        type: String
    },
    link:{
        type: String
    },
    Synonymns:{
        type: []
    },
    Botanical_name:{
        type: String
    },
    Classification:{
        type: []
    },
    Habitat:{
        type: String
    },
    Habit:{
        type: String
    },
    Morphology:{
        type: []
    },
    Useful_part:{
        type: String
    },
    Phytoconstituents:{
        type: String
    },
    Rasapanchaka:{
        type: []
    },
    Karma:{
        type: String
    },
    Agrya_karma:{
        type: String
    },
    Therapeutic_indication:{
        type: String
    },
    Amayika_Prayoga:{
        type: []
    },
    Dose:{
        type: []
    },
    Yoga_formulation:{
        type: []
    },
    Shlok:{
        type: []
    },

})

const DrugDetailsModel = mongoose.model('drug_detail', drugDetailsSchemda);

export default DrugDetailsModel ;