using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplicationSignalr.Sokect
{

    [HubName("mensagemHub")]
    public class MensagemHub : Hub
    {
        public static void EnviarMensagem(string mensagem)
        {
            var hubContext = GlobalHost.ConnectionManager.GetHubContext<MensagemHub>();
            hubContext.Clients.All.add(mensagem);
        }
    }
}