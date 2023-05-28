module.exports = class AlocacaoController {

    static render(req, res) {
        res.render('dashboard/allocation/allocation')
    }

    static render_add(req, res) {
        res.render('dashboard/allocation/a_allocation')
    }

}