using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Url = table.Column<string>(type: "text", nullable: true),
                    Title = table.Column<string>(type: "text", nullable: true),
                    Image = table.Column<string>(type: "text", nullable: true),
                    Category = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    Director = table.Column<string>(type: "text", nullable: true),
                    Time = table.Column<string>(type: "text", nullable: true),
                    PublishYear = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ChapUrl",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    Chap = table.Column<int>(type: "integer", nullable: false),
                    Url = table.Column<string>(type: "text", nullable: true),
                    MovieId = table.Column<Guid>(type: "uuid", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ChapUrl", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ChapUrl_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ChapUrl_MovieId",
                table: "ChapUrl",
                column: "MovieId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ChapUrl");

            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
