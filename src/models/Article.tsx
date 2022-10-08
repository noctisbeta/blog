

export class Article {
    constructor(
        public id: string,
        public slug: string,
        public title: string,
        public date: string,
        public content: string,
        public preview: string,
    ) { }
}