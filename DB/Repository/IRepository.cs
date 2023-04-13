using System;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Query;

namespace DB.Repository
{
    public interface IRepository<TEntity> where TEntity : class
    {  
        /// <summary>
        /// Get first record or default from db.
        /// </summary>
        /// <param name="match"></param>
        /// <param name="disableTracking"></param>
        /// <returns></returns>
        TEntity GetFirstOrDefault(Expression<Func<TEntity, bool>> match = null, bool disableTracking = true);

        /// <summary>
        /// Get first record or default from db async.
        /// </summary>
        /// <param name="match"></param>
        /// <param name="disableTracking"></param>
        /// <returns></returns>
        Task<TEntity> GetFirstOrDefaultAsync(Expression<Func<TEntity, bool>> match = null, bool disableTracking = true);
         
        /// <summary>
        /// Insert entity to db
        /// </summary>
        /// <param name="entity"></param>
        void Insert(TEntity entity);

        /// <summary>
        /// Insert entity async to db
        /// </summary>
        /// <param name="entity"></param> 
        Task InsertAsync(TEntity entity);

        /// <summary>
        /// Save change into db.
        /// </summary>
        void SaveChanges();

        /// <summary>
        /// Save change into db async.
        /// </summary>
        /// <returns></returns>
        Task<int> SaveChangesAsync();

        /// <summary>
        /// Update entity in db
        /// </summary>
        /// <param name="entity"></param>
        void Update(TEntity entity);

        /// <summary>
        /// Update entity async in db
        /// </summary>
        /// <param name="entity"></param>
        Task UpdateAsync(TEntity entity);
        IQueryable<TEntity> GetAll(Expression<Func<TEntity, bool>> predicate = null, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null, Func<IQueryable<TEntity>, IIncludableQueryable<TEntity, object>> include = null, bool disableTracking = true);
        IQueryable<TEntity> GetAll(string includeProperties, Expression<Func<TEntity, bool>> predicate = null);
    }
}