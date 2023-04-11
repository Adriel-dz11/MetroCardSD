using DB.Repository;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace DB.Repository
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        private readonly MetroCardContext _context;
        private readonly DbSet<TEntity> _dbSet;

        public Repository(MetroCardContext context)
        {
            _context = context;
            _dbSet = _context.Set<TEntity>();
        }

        public virtual TEntity GetFirstOrDefault(Expression<Func<TEntity, bool>> match = null, bool disableTracking = true)
        {
            if (disableTracking)
            {
                return _dbSet.AsNoTracking().FirstOrDefault(match);
            }

            return _dbSet.AsTracking().FirstOrDefault(match);
        }

        public virtual Task<TEntity> GetFirstOrDefaultAsync(Expression<Func<TEntity, bool>> match = null, bool disableTracking = true)
        {
            if (disableTracking)
            {
                return _dbSet.AsNoTracking().FirstOrDefaultAsync(match);
            }

            return _dbSet.AsTracking().FirstOrDefaultAsync(match);
        }

        public void Insert(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            _dbSet.Add(entity);
            _context.Entry(entity).State = EntityState.Added;
        }

        public Task InsertAsync(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }

            _dbSet.AddAsync(entity);
            _context.Entry(entity).State = EntityState.Added;
            return _context.SaveChangesAsync();
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public Task<int> SaveChangesAsync()
        {
            return _context.SaveChangesAsync();
        }

        public void Update(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            _dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
        }

        public Task UpdateAsync(TEntity entity)
        {
            if (entity == null)
            {
                throw new ArgumentNullException("entity");
            }
            _dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            return _context.SaveChangesAsync();
        }
    }
}