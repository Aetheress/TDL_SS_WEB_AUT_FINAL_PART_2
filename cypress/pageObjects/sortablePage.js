class SortablePage {
    static visit() {
        cy.visit("https://demoqa.com/sortable");
    }
    static get rows() {
        return cy.get(`#demo-tabpane-list .list-group-item`);
    }
    static get lastRow() {
        return this.rows.eq(5);
    }
    static moveRow(y) {
        this.lastRow.trigger("mousedown", {which: 1})
        .trigger("mousemove", {x: 0, y: y, force:true})
        .trigger("mouseup", {force: true});
    }
    static sortRows(n) {
        const rowHeight=50;
        for (let i=0; i<n-1; i++) {
            this.moveRow((n-1-i)*(-rowHeight)+5);
        }
    }
}

export default SortablePage;