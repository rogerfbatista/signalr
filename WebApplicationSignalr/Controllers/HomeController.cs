using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using WebApplicationSignalr.Sokect;

namespace WebApplicationSignalr.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public async Task<JsonResult> Salvar()
        {
            MensagemHub.EnviarMensagem("Olá tudo bem!!! estamos iniciando a  importação");
            await Task.Delay(TimeSpan.FromSeconds(5));
            MensagemHub.EnviarMensagem("Ja estamos enviando email");
            await Task.Delay(TimeSpan.FromSeconds(7));
            MensagemHub.EnviarMensagem("Mais 2 segundos pra acabar");
            await Task.Delay(TimeSpan.FromSeconds(2));
            MensagemHub.EnviarMensagem("Fim!!!");
            await Task.Delay(TimeSpan.FromSeconds(2));
            return Json(new { }, JsonRequestBehavior.AllowGet);
        }
    }
}