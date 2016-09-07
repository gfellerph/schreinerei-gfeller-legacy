using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace schreinerei_gfeller
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Contact",
                url: "Kontakt",
                defaults: new { controller = "Home", action = "Contact" }
            );

            routes.MapRoute(
                name: "Products",
                url: "Produkte",
                defaults: new { controller = "Products", action = "Index" }
            );

            routes.MapRoute(
                name: "ProductDetails",
                url: "Produkte/{product}",
                defaults: new { controller = "Products", action = "Detail", product = "Kitchens" }
            );

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }

        protected void Application_Start()
        {
            RegisterRoutes(RouteTable.Routes);
        }
    }
}
