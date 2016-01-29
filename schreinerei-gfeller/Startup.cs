using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(schreinerei_gfeller.Startup))]
namespace schreinerei_gfeller
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
