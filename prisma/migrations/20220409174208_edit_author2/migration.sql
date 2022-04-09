BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Author] ALTER COLUMN [email] NVARCHAR(1000) NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
