"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagination = void 0;
const common_1 = require("@nestjs/common");
exports.GetPagination = (0, common_1.createParamDecorator)((data, ctx) => {
    const req = ctx.switchToHttp().getRequest();
    const paginationParams = {
        page: 0,
        limit: 15,
        sort: [],
        search: []
    };
    paginationParams.page = req.query.page ? parseInt(req.query.page.toString()) : 0;
    paginationParams.limit = req.query.limit ? parseInt(req.query.limit.toString()) : 10;
    if (req.query.sort) {
        const sortArray = req.query.sort.toString().split(',');
        paginationParams.sort = sortArray.map(sortItem => {
            const sortBy = sortItem[0];
            switch (sortBy) {
                case "-":
                    return {
                        field: sortItem.slice(1),
                        by: 'ASC'
                    };
                case "+":
                    return {
                        field: sortItem.slice(1),
                        by: 'ASC'
                    };
                default:
                    return {
                        field: sortItem.trim(),
                        by: 'DESC'
                    };
            }
        });
    }
    if (req.query.search) {
        const searchArray = req.query.search.toString().split(',');
        paginationParams.search = searchArray.map(searchItem => {
            const field = searchItem.split(":")[0];
            const value = searchItem.split(":")[1];
            return {
                field,
                value
            };
        });
    }
    return paginationParams;
});
//# sourceMappingURL=get-pagintation.js.map