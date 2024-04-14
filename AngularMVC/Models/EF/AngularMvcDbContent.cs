using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace AngularMVC.Models.EF
{
    public class AngularMvcDbContent : DbContext
    {
        public AngularMvcDbContent():base("name = AngularMvcDbContent")
        {

        }

        //setting EF convention
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //Use singular table name
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> Users { get; set; }

    }
}