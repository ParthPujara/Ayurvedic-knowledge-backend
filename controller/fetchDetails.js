import DrugDetailsModel from "../models/DrugDetailsModel.js";

export const fetchDetails = async (req, res) => {
    try {
        let { drug_name, Description, link, Synonymns, Botanical_name, Classification, Habitat, Habit, Morphology, Useful_part, Phytoconstituents, Rasapanchaka, Karma, Agrya_karma, Therapeutic_indication, Amayika_Prayoga, Dose, Yoga_formulation, Shlok } = await req.body;
        Synonymns = await Synonymns?.split("\n");
        Classification = await Classification?.split("\n");
        Morphology = await Morphology?.split("\n");
        Rasapanchaka = await Rasapanchaka?.split("\n");
        Amayika_Prayoga = await Amayika_Prayoga?.split("\n");
        Dose = await Dose?.split("\n");
        Yoga_formulation = await Yoga_formulation?.split("\n");
        Shlok = await Shlok?.split("\n");
        const result = await DrugDetailsModel.create({
            drug_name: drug_name,
            Description: Description,
            link: link,
            Synonymns: Synonymns,
            Botanical_name: Botanical_name,
            Classification: Classification,
            Habitat: Habitat,
            Habit: Habit,
            Morphology: Morphology,
            Useful_part: Useful_part,
            Phytoconstituents: Phytoconstituents,
            Rasapanchaka: Rasapanchaka,
            Karma: Karma,
            Agrya_karma: Agrya_karma,
            Therapeutic_indication: Therapeutic_indication,
            Amayika_Prayoga: Amayika_Prayoga,
            Dose: Dose,
            Yoga_formulation: Yoga_formulation,
            Shlok: Shlok
        });
        res.json({
            code: 200,
            status: "success",
            message: "Drug Inserted",
            data: { result },
        });
    } catch (error) {
        console.log(error);
        res.json({
            code: 500,
            status: "failure",
            message: "Error Occured",
            data: { message: "Error Occured" },
        });
    }

}

export const getDetails = async(req,res) =>{
    try {
        const result = await DrugDetailsModel.find();
        if(result){
            res.json({
                code: 200,
                status: "success",
                message: "Drug Found",
                length: result.length,
                data: { result },
            });
        }
        else{
            res.json({
                code: 200,
                status: "failure",
                message: "No Drug Found",
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            code: 500,
            status: "failure",
            message: "Error Occured",
            data: { message: "Error Occured" },
        });
    }
}

export const updateDetails = async(req,res) =>{
    try {
        let { id, drug_name, Description, link, Synonymns, Botanical_name, Classification, Habitat, Habit, Morphology, Useful_part, Phytoconstituents, Rasapanchaka, Karma, Agrya_karma, Therapeutic_indication, Amayika_Prayoga, Dose, Yoga_formulation, Shlok } = await req.body;
        Synonymns = await Synonymns?.split("\n");
        Classification = await Classification?.split("\n");
        Morphology = await Morphology?.split("\n");
        Rasapanchaka = await Rasapanchaka?.split("\n");
        Amayika_Prayoga = await Amayika_Prayoga?.split("\n");
        Dose = await Dose?.split("\n");
        Yoga_formulation = await Yoga_formulation?.split("\n");
        Shlok = await Shlok?.split("\n");
        const result = await DrugDetailsModel.findOneAndUpdate({_id : id},{ drug_name: drug_name,
            Description: Description,
            link: link,
            Synonymns: Synonymns,
            Botanical_name: Botanical_name,
            Classification: Classification,
            Habitat: Habitat,
            Habit: Habit,
            Morphology: Morphology,
            Useful_part: Useful_part,
            Phytoconstituents: Phytoconstituents,
            Rasapanchaka: Rasapanchaka,
            Karma: Karma,
            Agrya_karma: Agrya_karma,
            Therapeutic_indication: Therapeutic_indication,
            Amayika_Prayoga: Amayika_Prayoga,
            Dose: Dose,
            Yoga_formulation: Yoga_formulation,
            Shlok: Shlok},{new: true})
            res.json({
                code: 200,
                status: "success",
                message: "Drug updated",
                data: { result },
            });
    } catch (error) {
        console.log(error);
        res.json({
            code: 500,
            status: "failure",
            message: "Error Occured",
            data: { message: "Error Occured" },
        });
    }
}

export const deleteDetails = async(req,res) =>{
    try {
        let {id} = await req.body;
        const result = await DrugDetailsModel.findOneAndDelete({_id: id});
        if(result){
            res.json({
                code: 200,
                status: "success",
                message: "Drug Deleted",
                data: { result },
            });
        }
        else{
            res.json({
                code: 200,
                status: "failure",
                message: "No Drug Found",
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            code: 500,
            status: "failure",
            message: "Error Occured",
            data: { message: "Error Occured" },
        });
    }
}