using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Contacts.Data;
using Contacts.Models;

namespace Contacts.Pages.ContactsRazorPages
{
    public class IndexModel : PageModel
    {
        private readonly Contacts.Data.ContactsContext _context;

        public IndexModel(Contacts.Data.ContactsContext context)
        {
            _context = context;
        }

        public IList<Contact> Contact { get;set; }

        public async Task OnGetAsync()
        {
            Contact = await _context.Contact.ToListAsync();
        }
    }
}
