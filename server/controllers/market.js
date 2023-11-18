const marketModel = require("../models/market")

const marketCtrl = {
    async getGoods(req, res) {
        const [result] = await marketModel.getGoods()
        res.send({
            ok: 1,
            goodsList: result.sort(() => 0.5 - Math.random())
        })
    },
    publishGoods: async (req,res) => {
        await marketModel.publishGoods(req.body,req.file)
        res.send({
            ok:1,
            message:'发布成功'
        })
    },
    getPublisherInfo:async (req,res)=>{
        const [publisher,publishgoods,fans,follows] = await marketModel.getPublisherInfo(req.params)
        res.send({
            ok:1,
            publisher:publisher[0],
            publishgoods,
            fans,
            follows
        })
    }
}

module.exports = marketCtrl