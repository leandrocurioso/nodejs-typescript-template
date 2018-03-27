declare module NodeJS  {

    interface Global {
        restneer: {
            config: any,
            routes: any,
            securityPermission: {
                apiResourceRoute: any[],
                apiRoleResourceRoute: any[]
            }
        }
    }    
}

declare function escape(s:string): string;
declare function unescape(s:string): string;