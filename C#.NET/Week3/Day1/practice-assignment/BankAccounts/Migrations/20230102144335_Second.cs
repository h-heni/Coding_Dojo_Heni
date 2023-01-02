using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BankAccounts.Migrations
{
    public partial class Second : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Users_CreatorUserId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_CreatorUserId",
                table: "Transactions");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "Transactions");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Users",
                newName: "RegisterId");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Transactions",
                newName: "RegisterId");

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_RegisterId",
                table: "Transactions",
                column: "RegisterId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Users_RegisterId",
                table: "Transactions",
                column: "RegisterId",
                principalTable: "Users",
                principalColumn: "RegisterId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Transactions_Users_RegisterId",
                table: "Transactions");

            migrationBuilder.DropIndex(
                name: "IX_Transactions_RegisterId",
                table: "Transactions");

            migrationBuilder.RenameColumn(
                name: "RegisterId",
                table: "Users",
                newName: "UserId");

            migrationBuilder.RenameColumn(
                name: "RegisterId",
                table: "Transactions",
                newName: "UserId");

            migrationBuilder.AddColumn<int>(
                name: "CreatorUserId",
                table: "Transactions",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Transactions_CreatorUserId",
                table: "Transactions",
                column: "CreatorUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Transactions_Users_CreatorUserId",
                table: "Transactions",
                column: "CreatorUserId",
                principalTable: "Users",
                principalColumn: "UserId");
        }
    }
}
