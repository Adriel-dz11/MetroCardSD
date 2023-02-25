﻿using Microsoft.EntityFrameworkCore;

namespace DB
{
    public class MetroCardContext : DbContext 
    {
        public MetroCardContext(DbContextOptions<MetroCardContext> options)
            : base(options)
        {
            System.Net.ServicePointManager.ServerCertificateValidationCallback += (sender, certificate, chain, SslPolicyErrors) => true;

        }

        public DbSet<Users> Usuarios { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Users>().ToTable("Users");
        }

    }
}