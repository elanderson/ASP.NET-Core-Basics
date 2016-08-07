using Contacts.Models;
using Microsoft.EntityFrameworkCore;

namespace Contacts.Data
{
    public sealed class ContactsContext : DbContext
    {
        private static bool _created;
        public DbSet<Contact> Contact { get; set; }
        public ContactsContext(DbContextOptions<ContactsContext> options)
            : base(options)
        {
            if (_created) return;
            Database.Migrate();
            _created = true;
        }
    }
}
