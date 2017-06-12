"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Proposal {
    constructor(id, customer, portfolio_url = 'http://', tools, estimated_hours, hourly_rate, weeks_to_complte, client_email) {
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complte = weeks_to_complte;
        this.client_email = client_email;
    }
}
exports.Proposal = Proposal;
// 15, 'Abc Company', 'http://portfolio.BigMouthFrogDev.com', 'Ruby on Rails', 150, 120, 15,'client@test.com' 
//# sourceMappingURL=proposal.js.map